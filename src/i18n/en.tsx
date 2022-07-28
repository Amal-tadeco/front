const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    publication: {
      name: 'publication',
      label: 'Publications',
      menu: 'Publications',
      exporterFileName: 'publication_export',
      list: {
        menu: 'Publications',
        title: 'Publications',
      },
      create: {
        success: 'Publication successfully saved',
      },
      update: {
        success: 'Publication successfully saved',
      },
      destroy: {
        success: 'Publication successfully deleted',
      },
      destroyAll: {
        success: 'Publication(s) successfully deleted',
      },
      edit: {
        title: 'Edit Publication',
      },
      fields: {
        id: 'Id',
        thematique: 'Thematique',
        categorie: 'Categorie',
        type: 'Type',
        supports: 'Supports',
        description: 'Description',
        statut: 'Statut',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        categorie: {
          Manifestation: 'Manifestation',
          'article scientifique': 'Article scientifique',
          'article journalistique':
            'Article journalistique',
          rapport: 'Rapport',
          entretien: 'Entretien',
          'données numériques': 'Données numériques',
          autre: 'Autre',
        },
        type: {
          Texte: 'Texte',
          audio: 'Audio',
          vidéo: 'Vidéo',
          'lien web': 'Lien web',
          photo: 'Photo',
          infographie: 'Infographie',
          statistiques: 'Statistiques',
          autre: 'Autre',
        },
        statut: {
          Archivé: 'Archivé',
          'En attente de validation':
            'En attente de validation',
          Validé: 'Validé',
          Rejeté: 'Rejeté',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Publication',
      },
      view: {
        title: 'View Publication',
      },
      importer: {
        title: 'Import Publications',
        fileName: 'publication_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    forum: {
      name: 'forum',
      label: 'Forums',
      menu: 'Forums',
      exporterFileName: 'forum_export',
      list: {
        menu: 'Forums',
        title: 'Forums',
      },
      create: {
        success: 'Forum successfully saved',
      },
      update: {
        success: 'Forum successfully saved',
      },
      destroy: {
        success: 'Forum successfully deleted',
      },
      destroyAll: {
        success: 'Forum(s) successfully deleted',
      },
      edit: {
        title: 'Edit Forum',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        sujet: 'Sujet',
        visibilite: 'Visibilite',
        statut: 'Statut',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        visibilite: {
          Ouverte: 'Ouverte',
          Fermee: 'Fermee',
        },
        statut: {
          En_attente: 'En_attente',
          valide: 'Valide',
          rejete: 'Rejete',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Forum',
      },
      view: {
        title: 'View Forum',
      },
      importer: {
        title: 'Import Forums',
        fileName: 'forum_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    demandeAppui: {
      name: 'demandeAppui',
      label: 'DemandeAppuis',
      menu: 'DemandeAppuis',
      exporterFileName: 'demandeAppui_export',
      list: {
        menu: 'DemandeAppuis',
        title: 'DemandeAppuis',
      },
      create: {
        success: 'DemandeAppui successfully saved',
      },
      update: {
        success: 'DemandeAppui successfully saved',
      },
      destroy: {
        success: 'DemandeAppui successfully deleted',
      },
      destroyAll: {
        success: 'DemandeAppui(s) successfully deleted',
      },
      edit: {
        title: 'Edit DemandeAppui',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        etat: 'Etat',
        gouvernorat: 'Gouvernorat',
        importance: 'Importance',
        description: 'Description',
        supports: 'Supports',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        type: {
          Legal: 'Legal',
          logistique: 'Logistique',
        },
        etat: {
          En_ligne: 'En_ligne',
          physique: 'Physique',
        },
        gouvernorat: {
          tunis: 'Tunis',
          ariana: 'Ariana',
          beja: 'Beja',
          ben_arouss: 'Ben_arouss',
          bizerte: 'Bizerte',
          gabes: 'Gabes',
          gafsa: 'Gafsa',
          jendouba: 'Jendouba',
          kairouan: 'Kairouan',
          kasserine: 'Kasserine',
          kebili: 'Kebili',
          kef: 'Kef',
          mahdia: 'Mahdia',
          manouba: 'Manouba',
          medenine: 'Medenine',
          monastir: 'Monastir',
          nabeul: 'Nabeul',
          sfax: 'Sfax',
          sidi_bouzid: 'Sidi_bouzid',
          siliana: 'Siliana',
          sousse: 'Sousse',
          tataouine: 'Tataouine',
          tozeur: 'Tozeur',
          zaghouan: 'Zaghouan',
        },
        importance: {
          Haute: 'Haute',
          modere: 'Modere',
          normale: 'Normale',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New DemandeAppui',
      },
      view: {
        title: 'View DemandeAppui',
      },
      importer: {
        title: 'Import DemandeAppuis',
        fileName: 'demandeAppui_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    evenement: {
      name: 'evenement',
      label: 'Evenements',
      menu: 'Evenements',
      exporterFileName: 'evenement_export',
      list: {
        menu: 'Evenements',
        title: 'Evenements',
      },
      create: {
        success: 'Evenement successfully saved',
      },
      update: {
        success: 'Evenement successfully saved',
      },
      destroy: {
        success: 'Evenement successfully deleted',
      },
      destroyAll: {
        success: 'Evenement(s) successfully deleted',
      },
      edit: {
        title: 'Edit Evenement',
      },
      fields: {
        id: 'Id',
        thematique: 'Thematique',
        categorie: 'Categorie',
        type: 'Type',
        supports: 'Supports',
        description: 'Description',
        dateRange: 'Date',
        date: 'Date',
        statut: 'Statut',
        emplacement: 'Emplacement',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        categorie: {
          Ceremonies: 'Ceremonies',
          Manifestation: 'Manifestation',
        },
        type: {
          texte: 'Texte',
          audio: 'Audio',
          vidéo: 'Vidéo',
          lien_web: 'Lien_web',
          photo: 'Photo',
          infographie: 'Infographie',
          statistiques: 'Statistiques',
        },
        statut: {
          Archive: 'Archive',
          En_attente: 'En_attente',
          Valide: 'Valide',
          Rejete: 'Rejete',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Evenement',
      },
      view: {
        title: 'View Evenement',
      },
      importer: {
        title: 'Import Evenements',
        fileName: 'evenement_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    thematique: {
      name: 'thematique',
      label: 'Thematiques',
      menu: 'Thematiques',
      exporterFileName: 'thematique_export',
      list: {
        menu: 'Thematiques',
        title: 'Thematiques',
      },
      create: {
        success: 'Thematique successfully saved',
      },
      update: {
        success: 'Thematique successfully saved',
      },
      destroy: {
        success: 'Thematique successfully deleted',
      },
      destroyAll: {
        success: 'Thematique(s) successfully deleted',
      },
      edit: {
        title: 'Edit Thematique',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        description: 'Description',
        tags: 'Tags',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Thematique',
      },
      view: {
        title: 'View Thematique',
      },
      importer: {
        title: 'Import Thematiques',
        fileName: 'thematique_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tags: {
      name: 'tags',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'tags_export',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tags successfully saved',
      },
      update: {
        success: 'Tags successfully saved',
      },
      destroy: {
        success: 'Tags successfully deleted',
      },
      destroyAll: {
        success: 'Tags(s) successfully deleted',
      },
      edit: {
        title: 'Edit Tags',
      },
      fields: {
        id: 'Id',
        titre: 'Titre',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Tags',
      },
      view: {
        title: 'View Tags',
      },
      importer: {
        title: 'Import Tags',
        fileName: 'tags_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    artiste: {
      name: 'artiste',
      label: 'Artistes',
      menu: 'Artistes',
      exporterFileName: 'artiste_export',
      list: {
        menu: 'Artistes',
        title: 'Artistes',
      },
      create: {
        success: 'Artiste successfully saved',
      },
      update: {
        success: 'Artiste successfully saved',
      },
      destroy: {
        success: 'Artiste successfully deleted',
      },
      destroyAll: {
        success: 'Artiste(s) successfully deleted',
      },
      edit: {
        title: 'Edit Artiste',
      },
      fields: {
        id: 'Id',
        nom: 'Nom',
        prenom: 'Prenom',
        domaine: 'Domaine',
        adresse: 'Adresse',
        email: 'Email',
        phoneNumberRange: 'PhoneNumber',
        phoneNumber: 'PhoneNumber',
        espaceArtistique: 'EspaceArtistique',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New Artiste',
      },
      view: {
        title: 'View Artiste',
      },
      importer: {
        title: 'Import Artistes',
        fileName: 'artiste_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    espaceArtistique: {
      name: 'espaceArtistique',
      label: 'EspaceArtistiques',
      menu: 'EspaceArtistiques',
      exporterFileName: 'espaceArtistique_export',
      list: {
        menu: 'EspaceArtistiques',
        title: 'EspaceArtistiques',
      },
      create: {
        success: 'EspaceArtistique successfully saved',
      },
      update: {
        success: 'EspaceArtistique successfully saved',
      },
      destroy: {
        success: 'EspaceArtistique successfully deleted',
      },
      destroyAll: {
        success: 'EspaceArtistique(s) successfully deleted',
      },
      edit: {
        title: 'Edit EspaceArtistique',
      },
      fields: {
        id: 'Id',
        artiste: 'Artiste',
        supports: 'Supports',
        titre: 'Titre',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'New EspaceArtistique',
      },
      view: {
        title: 'View EspaceArtistique',
      },
      importer: {
        title: 'Import EspaceArtistiques',
        fileName: 'espaceArtistique_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
      },
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
