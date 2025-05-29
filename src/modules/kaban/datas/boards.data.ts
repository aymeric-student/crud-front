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
                    {
                        id: '0',
                        title: 'Build UI for onboarding flow',
                        description: 'Create a seamless onboarding experience for new users',
                        status: 'TODO',
                        subTasks: [
                            { id: '0-1', title: 'Design wireframes', isCompleted: true },
                            { id: '0-2', title: 'Implement components', isCompleted: false }
                        ]
                    },
                    {
                        id: '1',
                        title: 'Build UI for search',
                        status: 'TODO',
                        description: 'Implement search functionality with filters',
                        subTasks: [
                            { id: '1-1', title: 'Design search interface', isCompleted: true },
                            { id: '1-2', title: 'Add filter options', isCompleted: false },
                            { id: '1-3', title: 'Implement search logic', isCompleted: false }
                        ]
                    }
                ]
            },
            {
                id: '1',
                title: 'DOING',
                tasks: [
                    {
                        id: '2',
                        title: 'Design settings and search pages',
                        status: 'TODO',
                        description: 'Create comprehensive settings page with search capabilities',
                        subTasks: [
                            {
                                id: '2-1',
                                title: 'Research competitor pricing and business models',
                                isCompleted: true
                            },
                            {
                                id: '2-2',
                                title: 'Outline a business model that works for our solution',
                                isCompleted: true
                            },
                            {
                                id: '2-3',
                                title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                isCompleted: false
                            }
                        ]
                    }
                ]
            },
            {
                id: '2',
                title: 'DONE',
                tasks: []
            }
        ]
    },
    {
        id: '1',
        name: 'Bug Tracking',
        columns: [
            {
                id: '3',
                title: 'Open',
                tasks: [
                    {
                        id: '3',
                        title: 'Fix crash on login',
                        status: 'TODO',
                        description: 'Resolve the application crash that occurs during user login',
                        subTasks: [
                            { id: '3-1', title: 'Reproduce the bug', isCompleted: true },
                            { id: '3-2', title: 'Identify root cause', isCompleted: false },
                            { id: '3-3', title: 'Implement fix', isCompleted: false }
                        ]
                    }
                ]
            },
            {
                id: '4',
                title: 'In Progress',
                tasks: []
            },
            {
                id: '5',
                title: 'Resolved',
                tasks: []
            }
        ]
    }
]

export default boards
