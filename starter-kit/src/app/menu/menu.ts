import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'Question/Reponse',
    title: 'Question/Reponse',
    translate: 'Question/Reponse',
    type: 'item',
    icon: 'file',
    url: 'questionReponse'
  }
  ,
  {
    id: 'Foyer',
    title: 'Foyer',
    translate: 'Foyer',
    type: 'item',
    icon: 'file',
    url: 'foyer'
  }
  ,


  {
    id: 'Reclamation',
    title: 'Reclamation',
    translate: 'Reclamation',
    type: 'item',
    icon: 'file',
    url: 'Reclamations'
  },

  {
    id: 'Candidacy',
    title: 'Candidacy',
    translate: 'candidacy',
    type: 'item',
    icon: 'file',
    url: 'candidacy'
  },  {
    id: 'Opportuntity',
    title: 'Opportunity',
    translate: 'opportunity',
    type: 'item',
    icon: 'file',
    url: 'Retreive-opportunite'
  },  {
    id: 'Quiz',
    title: 'Quiz',
    translate: 'Quiz',
    type: 'item',
    icon: 'file',
    url: 'Quiz'
  }
]
