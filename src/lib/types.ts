export interface Step {
    name: string;
    status: string;
    end_time_unix_ms: any | null;
    start_time_unix_ms: any | null;
};

export interface Timeline {
    [key: string]: Step;
};

interface Project {
    title: string;
    description: string;
    breadcrumbs: string[];
};

export interface Projects {
    [key: string]: Project;
};


export interface Selection {
    project: {
        id: string;
    };
}

interface WorkflowData {
    end_time: null | number;
    events: any[];
    execution_id: null | string;
    result: null | any;
    start_time: null | number;
    status: null | string;
    total_duration_ms: null | number;
    workflow_name: null | string;
}

interface WorkflowStep {
    label: string;
    execution_time: number;
    data?: {
        image: string;
    };
}

export interface Workflow {
    data: WorkflowData;
    steps: WorkflowStep[];
    history: any[];
    status: string;
}