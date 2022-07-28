import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import config from 'src/config';

import {
  DashboardOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  SettingOutlined,
  RightOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlined />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <UserAddOutlined />,
  },

  {
    path: '/audit-logs',
    icon: <FileSearchOutlined />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingOutlined />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/publication',
    permissionRequired: permissions.publicationRead,
    icon: <RightOutlined />,
    label: i18n('entities.publication.menu'),
  },

  {
    path: '/category-publication',
    permissionRequired: permissions.categoryPublicationRead,
    icon: <RightOutlined />,
    label: i18n('entities.categoryPublication.menu'),
  },

  {
    path: '/forum',
    permissionRequired: permissions.forumRead,
    icon: <RightOutlined />,
    label: i18n('entities.forum.menu'),
  },

  {
    path: '/demande-appui',
    permissionRequired: permissions.demandeAppuiRead,
    icon: <RightOutlined />,
    label: i18n('entities.demandeAppui.menu'),
  },

  {
    path: '/evenement',
    permissionRequired: permissions.evenementRead,
    icon: <RightOutlined />,
    label: i18n('entities.evenement.menu'),
  },

  {
    path: '/category-evenement',
    permissionRequired: permissions.categoryEvenementRead,
    icon: <RightOutlined />,
    label: i18n('entities.categoryEvenement.menu'),
  },

  {
    path: '/thematique',
    permissionRequired: permissions.thematiqueRead,
    icon: <RightOutlined />,
    label: i18n('entities.thematique.menu'),
  },

  {
    path: '/tags',
    permissionRequired: permissions.tagsRead,
    icon: <RightOutlined />,
    label: i18n('entities.tags.menu'),
  },

  {
    path: '/artiste',
    permissionRequired: permissions.artisteRead,
    icon: <RightOutlined />,
    label: i18n('entities.artiste.menu'),
  },

  {
    path: '/domaine',
    permissionRequired: permissions.domaineRead,
    icon: <RightOutlined />,
    label: i18n('entities.domaine.menu'),
  },

  {
    path: '/espace-artistique',
    permissionRequired: permissions.espaceArtistiqueRead,
    icon: <RightOutlined />,
    label: i18n('entities.espaceArtistique.menu'),
  },
].filter(Boolean);
