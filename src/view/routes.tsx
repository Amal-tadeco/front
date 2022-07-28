import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/publication',
    loader: () =>
      import(
        'src/view/publication/list/PublicationListPage'
      ),
    permissionRequired: permissions.publicationRead,
    exact: true,
  },
  {
    path: '/publication/new',
    loader: () =>
      import(
        'src/view/publication/form/PublicationFormPage'
      ),
    permissionRequired: permissions.publicationCreate,
    exact: true,
  },
  {
    path: '/publication/importer',
    loader: () =>
      import(
        'src/view/publication/importer/PublicationImporterPage'
      ),
    permissionRequired: permissions.publicationImport,
    exact: true,
  },
  {
    path: '/publication/:id/edit',
    loader: () =>
      import(
        'src/view/publication/form/PublicationFormPage'
      ),
    permissionRequired: permissions.publicationEdit,
    exact: true,
  },
  {
    path: '/publication/:id',
    loader: () =>
      import(
        'src/view/publication/view/PublicationViewPage'
      ),
    permissionRequired: permissions.publicationRead,
    exact: true,
  },

  {
    path: '/category-publication',
    loader: () =>
      import(
        'src/view/categoryPublication/list/CategoryPublicationListPage'
      ),
    permissionRequired: permissions.categoryPublicationRead,
    exact: true,
  },
  {
    path: '/category-publication/new',
    loader: () =>
      import(
        'src/view/categoryPublication/form/CategoryPublicationFormPage'
      ),
    permissionRequired:
      permissions.categoryPublicationCreate,
    exact: true,
  },
  {
    path: '/category-publication/importer',
    loader: () =>
      import(
        'src/view/categoryPublication/importer/CategoryPublicationImporterPage'
      ),
    permissionRequired:
      permissions.categoryPublicationImport,
    exact: true,
  },
  {
    path: '/category-publication/:id/edit',
    loader: () =>
      import(
        'src/view/categoryPublication/form/CategoryPublicationFormPage'
      ),
    permissionRequired: permissions.categoryPublicationEdit,
    exact: true,
  },
  {
    path: '/category-publication/:id',
    loader: () =>
      import(
        'src/view/categoryPublication/view/CategoryPublicationViewPage'
      ),
    permissionRequired: permissions.categoryPublicationRead,
    exact: true,
  },

  {
    path: '/forum',
    loader: () =>
      import('src/view/forum/list/ForumListPage'),
    permissionRequired: permissions.forumRead,
    exact: true,
  },
  {
    path: '/forum/new',
    loader: () =>
      import('src/view/forum/form/ForumFormPage'),
    permissionRequired: permissions.forumCreate,
    exact: true,
  },
  {
    path: '/forum/importer',
    loader: () =>
      import('src/view/forum/importer/ForumImporterPage'),
    permissionRequired: permissions.forumImport,
    exact: true,
  },
  {
    path: '/forum/:id/edit',
    loader: () =>
      import('src/view/forum/form/ForumFormPage'),
    permissionRequired: permissions.forumEdit,
    exact: true,
  },
  {
    path: '/forum/:id',
    loader: () =>
      import('src/view/forum/view/ForumViewPage'),
    permissionRequired: permissions.forumRead,
    exact: true,
  },

  {
    path: '/demande-appui',
    loader: () =>
      import(
        'src/view/demandeAppui/list/DemandeAppuiListPage'
      ),
    permissionRequired: permissions.demandeAppuiRead,
    exact: true,
  },
  {
    path: '/demande-appui/new',
    loader: () =>
      import(
        'src/view/demandeAppui/form/DemandeAppuiFormPage'
      ),
    permissionRequired: permissions.demandeAppuiCreate,
    exact: true,
  },
  {
    path: '/demande-appui/importer',
    loader: () =>
      import(
        'src/view/demandeAppui/importer/DemandeAppuiImporterPage'
      ),
    permissionRequired: permissions.demandeAppuiImport,
    exact: true,
  },
  {
    path: '/demande-appui/:id/edit',
    loader: () =>
      import(
        'src/view/demandeAppui/form/DemandeAppuiFormPage'
      ),
    permissionRequired: permissions.demandeAppuiEdit,
    exact: true,
  },
  {
    path: '/demande-appui/:id',
    loader: () =>
      import(
        'src/view/demandeAppui/view/DemandeAppuiViewPage'
      ),
    permissionRequired: permissions.demandeAppuiRead,
    exact: true,
  },

  {
    path: '/evenement',
    loader: () =>
      import('src/view/evenement/list/EvenementListPage'),
    permissionRequired: permissions.evenementRead,
    exact: true,
  },
  {
    path: '/evenement/new',
    loader: () =>
      import('src/view/evenement/form/EvenementFormPage'),
    permissionRequired: permissions.evenementCreate,
    exact: true,
  },
  {
    path: '/evenement/importer',
    loader: () =>
      import(
        'src/view/evenement/importer/EvenementImporterPage'
      ),
    permissionRequired: permissions.evenementImport,
    exact: true,
  },
  {
    path: '/evenement/:id/edit',
    loader: () =>
      import('src/view/evenement/form/EvenementFormPage'),
    permissionRequired: permissions.evenementEdit,
    exact: true,
  },
  {
    path: '/evenement/:id',
    loader: () =>
      import('src/view/evenement/view/EvenementViewPage'),
    permissionRequired: permissions.evenementRead,
    exact: true,
  },

  {
    path: '/category-evenement',
    loader: () =>
      import(
        'src/view/categoryEvenement/list/CategoryEvenementListPage'
      ),
    permissionRequired: permissions.categoryEvenementRead,
    exact: true,
  },
  {
    path: '/category-evenement/new',
    loader: () =>
      import(
        'src/view/categoryEvenement/form/CategoryEvenementFormPage'
      ),
    permissionRequired: permissions.categoryEvenementCreate,
    exact: true,
  },
  {
    path: '/category-evenement/importer',
    loader: () =>
      import(
        'src/view/categoryEvenement/importer/CategoryEvenementImporterPage'
      ),
    permissionRequired: permissions.categoryEvenementImport,
    exact: true,
  },
  {
    path: '/category-evenement/:id/edit',
    loader: () =>
      import(
        'src/view/categoryEvenement/form/CategoryEvenementFormPage'
      ),
    permissionRequired: permissions.categoryEvenementEdit,
    exact: true,
  },
  {
    path: '/category-evenement/:id',
    loader: () =>
      import(
        'src/view/categoryEvenement/view/CategoryEvenementViewPage'
      ),
    permissionRequired: permissions.categoryEvenementRead,
    exact: true,
  },

  {
    path: '/thematique',
    loader: () =>
      import('src/view/thematique/list/ThematiqueListPage'),
    permissionRequired: permissions.thematiqueRead,
    exact: true,
  },
  {
    path: '/thematique/new',
    loader: () =>
      import('src/view/thematique/form/ThematiqueFormPage'),
    permissionRequired: permissions.thematiqueCreate,
    exact: true,
  },
  {
    path: '/thematique/importer',
    loader: () =>
      import(
        'src/view/thematique/importer/ThematiqueImporterPage'
      ),
    permissionRequired: permissions.thematiqueImport,
    exact: true,
  },
  {
    path: '/thematique/:id/edit',
    loader: () =>
      import('src/view/thematique/form/ThematiqueFormPage'),
    permissionRequired: permissions.thematiqueEdit,
    exact: true,
  },
  {
    path: '/thematique/:id',
    loader: () =>
      import('src/view/thematique/view/ThematiqueViewPage'),
    permissionRequired: permissions.thematiqueRead,
    exact: true,
  },

  {
    path: '/tags',
    loader: () => import('src/view/tags/list/TagsListPage'),
    permissionRequired: permissions.tagsRead,
    exact: true,
  },
  {
    path: '/tags/new',
    loader: () => import('src/view/tags/form/TagsFormPage'),
    permissionRequired: permissions.tagsCreate,
    exact: true,
  },
  {
    path: '/tags/importer',
    loader: () =>
      import('src/view/tags/importer/TagsImporterPage'),
    permissionRequired: permissions.tagsImport,
    exact: true,
  },
  {
    path: '/tags/:id/edit',
    loader: () => import('src/view/tags/form/TagsFormPage'),
    permissionRequired: permissions.tagsEdit,
    exact: true,
  },
  {
    path: '/tags/:id',
    loader: () => import('src/view/tags/view/TagsViewPage'),
    permissionRequired: permissions.tagsRead,
    exact: true,
  },

  {
    path: '/artiste',
    loader: () =>
      import('src/view/artiste/list/ArtisteListPage'),
    permissionRequired: permissions.artisteRead,
    exact: true,
  },
  {
    path: '/artiste/new',
    loader: () =>
      import('src/view/artiste/form/ArtisteFormPage'),
    permissionRequired: permissions.artisteCreate,
    exact: true,
  },
  {
    path: '/artiste/importer',
    loader: () =>
      import(
        'src/view/artiste/importer/ArtisteImporterPage'
      ),
    permissionRequired: permissions.artisteImport,
    exact: true,
  },
  {
    path: '/artiste/:id/edit',
    loader: () =>
      import('src/view/artiste/form/ArtisteFormPage'),
    permissionRequired: permissions.artisteEdit,
    exact: true,
  },
  {
    path: '/artiste/:id',
    loader: () =>
      import('src/view/artiste/view/ArtisteViewPage'),
    permissionRequired: permissions.artisteRead,
    exact: true,
  },

  {
    path: '/domaine',
    loader: () =>
      import('src/view/domaine/list/DomaineListPage'),
    permissionRequired: permissions.domaineRead,
    exact: true,
  },
  {
    path: '/domaine/new',
    loader: () =>
      import('src/view/domaine/form/DomaineFormPage'),
    permissionRequired: permissions.domaineCreate,
    exact: true,
  },
  {
    path: '/domaine/importer',
    loader: () =>
      import(
        'src/view/domaine/importer/DomaineImporterPage'
      ),
    permissionRequired: permissions.domaineImport,
    exact: true,
  },
  {
    path: '/domaine/:id/edit',
    loader: () =>
      import('src/view/domaine/form/DomaineFormPage'),
    permissionRequired: permissions.domaineEdit,
    exact: true,
  },
  {
    path: '/domaine/:id',
    loader: () =>
      import('src/view/domaine/view/DomaineViewPage'),
    permissionRequired: permissions.domaineRead,
    exact: true,
  },

  {
    path: '/espace-artistique',
    loader: () =>
      import(
        'src/view/espaceArtistique/list/EspaceArtistiqueListPage'
      ),
    permissionRequired: permissions.espaceArtistiqueRead,
    exact: true,
  },
  {
    path: '/espace-artistique/new',
    loader: () =>
      import(
        'src/view/espaceArtistique/form/EspaceArtistiqueFormPage'
      ),
    permissionRequired: permissions.espaceArtistiqueCreate,
    exact: true,
  },
  {
    path: '/espace-artistique/importer',
    loader: () =>
      import(
        'src/view/espaceArtistique/importer/EspaceArtistiqueImporterPage'
      ),
    permissionRequired: permissions.espaceArtistiqueImport,
    exact: true,
  },
  {
    path: '/espace-artistique/:id/edit',
    loader: () =>
      import(
        'src/view/espaceArtistique/form/EspaceArtistiqueFormPage'
      ),
    permissionRequired: permissions.espaceArtistiqueEdit,
    exact: true,
  },
  {
    path: '/espace-artistique/:id',
    loader: () =>
      import(
        'src/view/espaceArtistique/view/EspaceArtistiqueViewPage'
      ),
    permissionRequired: permissions.espaceArtistiqueRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
