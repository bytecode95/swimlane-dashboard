'use client';

import MajorKanbanBoard from '@/components/kanaban-view/MajorKanbanBoard';
import { PageLayout } from '@/components/page-layout/PageLayout';

export default function Page() {
    return (
        <PageLayout
            title="Sport Xi Project"
            secondaryTitle="Event Production"
            status="inProgress"
            assigned={[
                { src: '/avatar1.png', id: '1' },
                { src: '/avatar2.png', id: '2' },
                { src: '/avatar3.png', id: '3' },
            ]}
            onEdit={() => console.log('Edit clicked')}
            lastUpdated="04 April 2022"
        >
            <>
                <MajorKanbanBoard />
            </>
        </PageLayout>
    );
}
