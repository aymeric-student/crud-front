import type { Board } from '@/modules/kaban/models/board.model'

const boards: Board[] = [
    {
        id: '0',
        name: 'Platform Launch',
        columns: [
            {
                id: '0',
                title: 'TODO',
                tasks: [
                    { id: '0', title: 'Build UI for onboarding flow', subTask: [] },
                    { id: '1', title: 'Build UI for search', subTask: [] }
                ]
            },
            {
                id: '1',
                title: 'DOING',
                tasks: [{ id: '2', title: 'Design settings and search pages', subTask: [] }]
            }
        ]
    },
    {
        id: '1',
        name: 'Bug Tracking',
        columns: [
            {
                id: '2',
                title: 'Open',
                tasks: [{ id: '3', title: 'Fix crash on login', subTask: [] }]
            }
        ]
    }
]

export default boards
