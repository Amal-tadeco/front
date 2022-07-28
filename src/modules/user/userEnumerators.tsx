import Roles from 'src/security/roles';

const userEnumerators = {
  status: ['active', 'invited', 'empty-permissions'],
  roles: Object.keys(Roles.values),
  fonction:['Journaliste','Citoyen','Chercheur'],
  region:['tunis',
  'ariana',
  'beja',
  'ben_arouss',
  'bizerte',
  'gabes',
  'gafsa',
  'jendouba',
  'kairouan',
  'kasserine',
  'kebili',
  'kef',
  'mahdia',
  'manouba',
  'medenine',
  'monastir',
  'nabeul',
  'sfax',
  'sidi_bouzid',
  'siliana',
  'sousse',
  'tataouine',
  'tozeur',
  'zaghouan'],
  pays:['tunisie','algeria','maroc','mauritanie','turquie']
};

export default userEnumerators;
