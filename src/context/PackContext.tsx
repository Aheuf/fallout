import React, { PropsWithChildren, useState } from 'react';
import { PackContextType, IPack } from '../@types/pack';

export const PackContext = React.createContext<PackContextType | null>(null);

const PackProvider: React.FC<PropsWithChildren<IPack>> = ({ children }) => {
  const [packs, setPacks] = React.useState<IPack[]>([
    {
      type: 'confrérie',
      name: 'initié de la confrérie de l\'acier',
      inventory: [
        'treillis et capuche de la Confrérie',
        'couteau de combat',
        'holoplaques de la confrérie contenant des informations d\'identification',
        ],
    },
    {
        type: 'confrérie',
        name: 'scribe de la confrérie de l\'acier',
        inventory: [
          'armure de scribe de terrain de la confrérie et chapeau de scribe de terrain de la Confrérie',
          'couteau de combat',
          'holoplaques de la confrérie contenant des informations d\'identification',
        ],
    },
    {
        type: 'mister handy',
        name: 'miss nanny',
        inventory: [
          'blindage standard',
          'module d\'analyse comportementale',
          'module de detection des dangers',
          '10 capsules',
        ],
    },
    {
        type: 'mister handy',
        name: 'mister farmhand',
        inventory: [
          'blindage standard',
          'sac de fertilisant',
          '2 fruits mutants',
          '25 capsules',
        ],
    },
    {
        type: 'mister handy',
        name: 'mister gutsy',
        inventory: [
          'blindage mister gutsy',
          'module de capteurs de reconnaissance',
          '10 capsules',
        ],
    },
    {
        type: 'mister handy',
        name: 'nurse handy',
        inventory: [
          'blindage standard',
          '1 stimpack',
          'module de diagnostique',
          '10 capsules',
        ],
    },
    {
        type: 'super mutant',
        name: 'escarmoucheur',
        inventory: [
          'plastron + un bras ou une jambe armure de pillard',
          'fusil à verrou de fortune lourd avec 8+4d6 cartouches .308',
          'planche',
          '5 capsules',
        ],
    },
    {
        type: 'super mutant',
        name: 'frappeur',
        inventory: [
          'plastron + un bras ou une jambe armure de pillard',
          'fusil de fortune lourd avec 6+3d6 cartouches .38',
          '5 capsules',
        ],
    },
    {
        type: 'habitant de l\'abri',
        name: 'agent de sécurité de vault-tec',
        inventory: [
          'combinaison d\'abri',
          'armure de sécurité Vault-Tec et casque de sécurité Vault-Tec',
          'Gourde arborant le logo Vault-Tec contenant 1 dose d\'eau purifié',
          'pip-boy',
          'matraque',
          'pistolet 10mm avec 8+4d6 cartouches',
          '1 stimpack'
        ],
    },
    {
        type: 'habitant de l\'abri',
        name: 'résident de vault-tec',
        inventory: [
          'combinaison d\'abri',
          'cran d\'arrêt',
          'Gourde arborant le logo Vault-Tec contenant 1 dose d\'eau purifié',
          'pip-boy',
          'pistolet 10mm avec 6+3d6 cartouches',
          '2 stimpack',
          '10 capsules'
        ],
    },
    {
      type: 'habitant des terres désolés',
      name: 'colon',
      inventory: [
        'Vêtement résistants',
        'pistolet de fortune avec 6+3d6 cartouches .38',
        '45 capsules'
      ],
    },
    {
      type: 'habitant des terres désolés',
      name: 'marchand',
      inventory: [
        'Vêtement résistants',
        'pistolet de fortune avec 8+4d6 cartouches .38',
        'deux brahmines',
        '50 capsules'
      ],
    },
    {
      type: 'habitant des terres désolés',
      name: 'mercenaire',
      inventory: [
        'Vêtement résistants',
        'prospectus mentionnant une mission dans nue colonie à proximité, payé 50 capsules',
        '15 capsules'
      ],
    },
    {
      type: 'habitant des terres désolés',
      name: 'pillard',
      inventory: [
        'harnais',
        'pistolet de fortune avec 10+5d6 cartouches .38',
        '15 capsules'
      ],
    },
    {
      type: 'habitant des terres désolés',
      name: 'vagabond',
      inventory: [
        'tenue de nomade',
        'pistolet de fortune avec 8+4d6 cartouches .38',
        '30 capsules'
      ],
    },
  ]);

  return (
    <PackContext.Provider value={{ packs }}>
      {children}
    </PackContext.Provider>
  )
}

export default PackProvider;