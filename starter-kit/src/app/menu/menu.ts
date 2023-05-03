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
