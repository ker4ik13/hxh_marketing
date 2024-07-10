import type { Schema, Attribute } from '@strapi/strapi';

export interface UiTitle extends Schema.Component {
  collectionName: 'components_ui_titles';
  info: {
    displayName: 'Title';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.Component<'ui.link'>;
  };
}

export interface UiReviewPerson extends Schema.Component {
  collectionName: 'components_ui_review_people';
  info: {
    displayName: 'ReviewPerson';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    avatar: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UiReviewCard extends Schema.Component {
  collectionName: 'components_ui_review_cards';
  info: {
    displayName: 'ReviewCard';
    icon: 'calendar';
  };
  attributes: {
    projectName: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    author: Attribute.Component<'ui.review-person'>;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
  };
}

export interface UiCustomLink extends Schema.Component {
  collectionName: 'components_ui_custom_links';
  info: {
    displayName: 'CustomLink';
    icon: 'cursor';
  };
  attributes: {
    children: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    color: Attribute.Enumeration<['primary', 'secondary', 'transparent']>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
  };
}

export interface UiCustomButton extends Schema.Component {
  collectionName: 'components_ui_custom_buttons';
  info: {
    displayName: 'CustomButton';
    icon: 'cursor';
  };
  attributes: {
    children: Attribute.String & Attribute.Required;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['button', 'submit', 'reset']> &
      Attribute.DefaultTo<'button'>;
    color: Attribute.Enumeration<['primary', 'secondary', 'transparent']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.title': UiTitle;
      'ui.review-person': UiReviewPerson;
      'ui.review-card': UiReviewCard;
      'ui.link': UiLink;
      'ui.custom-link': UiCustomLink;
      'ui.custom-button': UiCustomButton;
    }
  }
}
