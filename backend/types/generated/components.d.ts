import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    cardLabel: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    items: Schema.Attribute.Component<'shared.service-item', true>;
    label: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.team-member', true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'team-member';
  };
  attributes: {
    desc: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about': SectionsAbout;
      'sections.contact': SectionsContact;
      'sections.hero': SectionsHero;
      'sections.services': SectionsServices;
      'sections.team': SectionsTeam;
      'shared.service-item': SharedServiceItem;
      'shared.team-member': SharedTeamMember;
    }
  }
}
