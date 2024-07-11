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

export interface UiTextWithLink extends Schema.Component {
  collectionName: 'components_ui_text_with_links';
  info: {
    displayName: 'TextWithLink';
    icon: 'link';
  };
  attributes: {
    label: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'ui.custom-link'>;
  };
}

export interface UiTeamPerson extends Schema.Component {
  collectionName: 'components_ui_team_people';
  info: {
    displayName: 'TeamPerson';
    icon: 'emotionHappy';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    info: Attribute.Component<'ui.label-with-value', true> & Attribute.Required;
    contacts: Attribute.Component<'ui.contact-link', true> & Attribute.Required;
    contact: Attribute.String & Attribute.Required;
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

export interface UiNewsMessage extends Schema.Component {
  collectionName: 'components_ui_news_messages';
  info: {
    displayName: 'NewsMessage';
    icon: 'medium';
    description: '';
  };
  attributes: {
    label: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'ui.custom-link'>;
    color: Attribute.Enumeration<['green', 'yellow', 'red', 'gray']> &
      Attribute.Required &
      Attribute.DefaultTo<'gray'>;
  };
}

export interface UiLogo extends Schema.Component {
  collectionName: 'components_ui_logos';
  info: {
    displayName: 'Logo';
    icon: 'medium';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    description: Attribute.String;
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

export interface UiLabelWithValue extends Schema.Component {
  collectionName: 'components_ui_label_with_values';
  info: {
    displayName: 'LabelWithValue';
    icon: 'file';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
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

export interface UiContactLink extends Schema.Component {
  collectionName: 'components_ui_contact_links';
  info: {
    displayName: 'ContactLink';
    icon: 'attachment';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<
      [
        'Instagram',
        'Telegram',
        'VK',
        'WhatsApp',
        'Behance',
        'OK',
        'GitHub',
        'Habr',
        'Website'
      ]
    > &
      Attribute.Required;
    href: Attribute.String & Attribute.Required;
  };
}

export interface UiAccordion extends Schema.Component {
  collectionName: 'components_ui_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    ask: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface BlocksTitleWithButtons extends Schema.Component {
  collectionName: 'components_blocks_title_with_buttons';
  info: {
    displayName: 'TitleWithButtons';
    icon: 'apps';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'title-with-buttons'>;
    blockId: Attribute.String;
    data: Attribute.Relation<
      'blocks.title-with-buttons',
      'oneToOne',
      'api::title-with-buttons.title-with-buttons'
    >;
  };
}

export interface BlocksTeamBlock extends Schema.Component {
  collectionName: 'components_blocks_team_blocks';
  info: {
    displayName: 'TeamBlock';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.Component<'ui.title'>;
    data: Attribute.Relation<
      'blocks.team-block',
      'oneToMany',
      'api::team.team'
    >;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'team-block'>;
    blockId: Attribute.String;
  };
}

export interface BlocksReviewBlock extends Schema.Component {
  collectionName: 'components_blocks_review_blocks';
  info: {
    displayName: 'ReviewBlock';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.Component<'ui.title'>;
    reviews: Attribute.Component<'ui.review-card', true> & Attribute.Required;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'reviews-block'>;
    blockId: Attribute.String;
  };
}

export interface BlocksAccordionBlock extends Schema.Component {
  collectionName: 'components_blocks_accordion_blocks';
  info: {
    displayName: 'AccordionBlock';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    data: Attribute.Relation<
      'blocks.accordion-block',
      'oneToOne',
      'api::accordion.accordion'
    >;
    title: Attribute.Component<'ui.title'>;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'accordion-block'>;
    blockId: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.title': UiTitle;
      'ui.text-with-link': UiTextWithLink;
      'ui.team-person': UiTeamPerson;
      'ui.review-person': UiReviewPerson;
      'ui.review-card': UiReviewCard;
      'ui.news-message': UiNewsMessage;
      'ui.logo': UiLogo;
      'ui.link': UiLink;
      'ui.label-with-value': UiLabelWithValue;
      'ui.custom-link': UiCustomLink;
      'ui.custom-button': UiCustomButton;
      'ui.contact-link': UiContactLink;
      'ui.accordion': UiAccordion;
      'blocks.title-with-buttons': BlocksTitleWithButtons;
      'blocks.team-block': BlocksTeamBlock;
      'blocks.review-block': BlocksReviewBlock;
      'blocks.accordion-block': BlocksAccordionBlock;
    }
  }
}
