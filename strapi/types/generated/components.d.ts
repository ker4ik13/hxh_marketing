import type { Schema, Attribute } from '@strapi/strapi';

export interface UiTitle extends Schema.Component {
  collectionName: 'components_ui_titles';
  info: {
    displayName: 'Title';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'ui.link'>;
    label: Attribute.RichText & Attribute.Required;
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

export interface UiPrice extends Schema.Component {
  collectionName: 'components_ui_prices';
  info: {
    displayName: 'Price';
    icon: 'write';
  };
  attributes: {
    amount: Attribute.Integer;
    currency: Attribute.String;
    state: Attribute.Enumeration<
      [
        '\u0424\u0438\u043A\u0441',
        '\u041E\u0442',
        '\u041F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438'
      ]
    > &
      Attribute.Required;
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

export interface UiInputProps extends Schema.Component {
  collectionName: 'components_ui_input_props';
  info: {
    displayName: 'InputProps';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    required: Attribute.Boolean;
    type: Attribute.Enumeration<
      [
        'text',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'time',
        'url',
        'week'
      ]
    > &
      Attribute.DefaultTo<'text'>;
    placeholder: Attribute.String;
    name: Attribute.String & Attribute.Required;
    autoComplete: Attribute.String;
  };
}

export interface UiCustomLink extends Schema.Component {
  collectionName: 'components_ui_custom_links';
  info: {
    displayName: 'CustomLink';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    children: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    color: Attribute.Enumeration<['primary', 'secondary', 'transparent']>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    icon: Attribute.Enumeration<
      [
        'VK',
        'Behance',
        'Instagram',
        'WhatsApp',
        'Telegram',
        'GitHub',
        'OK',
        'Habr',
        'Website',
        'Arrow',
        'Send'
      ]
    >;
  };
}

export interface UiCustomInput extends Schema.Component {
  collectionName: 'components_ui_custom_inputs';
  info: {
    displayName: 'CustomInput';
    icon: 'pencil';
  };
  attributes: {
    label: Attribute.String;
    inputProps: Attribute.Component<'ui.input-props'>;
  };
}

export interface UiCustomButton extends Schema.Component {
  collectionName: 'components_ui_custom_buttons';
  info: {
    displayName: 'CustomButton';
    icon: 'cursor';
    description: '';
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
    icon: Attribute.Enumeration<
      [
        'VK',
        'Behance',
        'Instagram',
        'WhatsApp',
        'Telegram',
        'GitHub',
        'OK',
        'Habr',
        'Website',
        'Arrow',
        'Send'
      ]
    >;
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

export interface MetaUserAgents extends Schema.Component {
  collectionName: 'components_meta_user_agents';
  info: {
    displayName: 'User Agents';
    icon: 'shield';
  };
  attributes: {
    userAgent: Attribute.String & Attribute.Required;
  };
}

export interface MetaPagePath extends Schema.Component {
  collectionName: 'components_meta_page_paths';
  info: {
    displayName: 'PagePath';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    path: Attribute.String & Attribute.Required;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Robots SEO';
    icon: 'write';
    description: '';
  };
  attributes: {
    pages: Attribute.Component<'meta.page-path', true> & Attribute.Required;
    userAgent: Attribute.String & Attribute.Required & Attribute.DefaultTo<'*'>;
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
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
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
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksServiceBlock extends Schema.Component {
  collectionName: 'components_blocks_service_blocks';
  info: {
    displayName: 'ServiceBlock';
    icon: 'grid';
  };
  attributes: {
    data: Attribute.Relation<
      'blocks.service-block',
      'oneToMany',
      'api::service.service'
    >;
    title: Attribute.Component<'ui.title'>;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'services-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'from-bottom-to-top'>;
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
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksFormBlock extends Schema.Component {
  collectionName: 'components_blocks_form_blocks';
  info: {
    displayName: 'FormBlock';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'form-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<'blocks.form-block', 'oneToOne', 'api::form.form'>;
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
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
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
      'ui.price': UiPrice;
      'ui.news-message': UiNewsMessage;
      'ui.logo': UiLogo;
      'ui.link': UiLink;
      'ui.label-with-value': UiLabelWithValue;
      'ui.input-props': UiInputProps;
      'ui.custom-link': UiCustomLink;
      'ui.custom-input': UiCustomInput;
      'ui.custom-button': UiCustomButton;
      'ui.contact-link': UiContactLink;
      'ui.accordion': UiAccordion;
      'meta.user-agents': MetaUserAgents;
      'meta.page-path': MetaPagePath;
      'meta.meta': MetaMeta;
      'blocks.title-with-buttons': BlocksTitleWithButtons;
      'blocks.team-block': BlocksTeamBlock;
      'blocks.service-block': BlocksServiceBlock;
      'blocks.review-block': BlocksReviewBlock;
      'blocks.form-block': BlocksFormBlock;
      'blocks.accordion-block': BlocksAccordionBlock;
    }
  }
}
