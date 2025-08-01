import { BrainCircuit, Check, Database, FileCheck2, FileSearch, IdCard, Shield, ShieldAlert } from "@lucide/svelte";
import BookOpenIcon from "@lucide/svelte/icons/book-open";
import BotIcon from "@lucide/svelte/icons/bot";
import Settings2Icon from "@lucide/svelte/icons/settings-2";
import SquareTerminalIcon from "@lucide/svelte/icons/square-terminal";

export const config = $state({
    app: {
        breadcrumbs: ["KYC", "Agentic Workflow"],
    },
    company: {
        name: "Pinnacle Bank",
        color: "#021535",
        logo: "/pinnacle_logo.png",
    },
    user: {
        name: "Lola",
        avatar_id: "user",
    },  
    nav:[
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminalIcon,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: BotIcon,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpenIcon,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "/config",
            icon: Settings2Icon,
            items: [
                {
                    title: "General",
                    url: "/config",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
}); 

export const diagram = $state({
    top: 8 + 2,
    left: 32,
    columns: {
        "c1": {
            left: 58 - 32,
            center: 58 - 32 + 48/2,
            right: 58 - 32 + 48
        },
        "c2": {
            left: 174 - 32,
            center: 174 - 32 + 48/2,
            right: 174 - 32 + 48
        },
        "c3": {
            left: 290 - 32,
            center: 290 - 32 + 48/2,
            right: 290 - 32 + 48
        },
    },
    rows: {
        "r1": {
            top: 147 - 10,
            center: 147 - 10 + 48/2,
            bottom: 147 - 10 + 48
        },
        "r2": {
            top: 243 - 10,
            center: 243 -10 + 48/2,
            bottom: 243 -10 + 48
        },
         "r3": {
            top: 339 - 10,
            center: 339 - 10 + 48/2,
            bottom: 339 - 10 + 48
        },
         "r4": {
            top: 435 - 10,
            center: 435 - 10 + 48/2,
            bottom: 435 - 10 + 48
        },
         "r5": {
            top: 531 - 10,
            center: 531 - 10 + 48/2,
            bottom: 531 - 10 + 48
        },
         "r6": {
            top: 627 - 10,
            center: 627 - 10 + 48/2,
            bottom: 627 - 10 + 48
        },
         "r7": {
            top: 723 - 10,
            center: 723 - 10 + 48/2,
            bottom: 723 - 10 + 48
        },
    },
});

export const widgets = $state({
    // Row 1
    "r1c1": {
        type: `IconBtn`,
        step: `identification_doc`,
        icon: FileCheck2,
        iconExecuted: false,
        tooltip: `Identification Document`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `identification_doc`
    },
    "r1c2": {
        type: `IconBtn`,
        step: `authorization_doc`,
        icon: FileCheck2,
        iconExecuted: false,
        tooltip: `Signed authorization document`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `authorization_doc`
    },
    "r1c3": {
        type: `IconBtn`,
        step: `proof_address`,
        icon: FileCheck2,
        iconExecuted: false,
        tooltip: `Proof of address`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `proof_address`
    },
    // Row 2
    "r2c1": {
        type: `ImgBtn`,
        step: `identification_doc_ocr`,
        logo: `/logo.png`,
        logoExecuted: false,
        tooltip: `Analyse and Extract Data - Document AI`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `identification_doc_results`
    },
    "r2c2": {
        type: `ImgBtn`,
        step: `authorization_doc_ocr`,
        logo: `/logo.png`,
        logoExecuted: false,
        tooltip: `Analyse and Extract Data - Document AI`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `authorization_doc_results`
    },
    "r2c3": {
        type: `ImgBtn`,
        step: `proof_address_ocr`,
        logo: `/logo.png`,
        logoExecuted: false,
        tooltip: `Analyse and Extract Data - Document AI`,
        hasAnimation: false,
        classChange: false,
        associatedPanel: `proof_address_results`
    },
    // Row 3
    "r3c1": {
        type: `IconBtn`,
        step: `identification_doc_validation`,
        icon: FileSearch,
        iconExecuted: ShieldAlert,
        tooltip: `Data validation`,
        hasAnimation: true,
        classChange: "text-amber-500",
        associatedPanel: `identification_doc_validation`
    },
    "r3c2": {
        type: `IconBtn`,
        step: `authorization_doc_validation`,
        icon: FileSearch,
        iconExecuted: Check,
        tooltip: `Data validation`,
        hasAnimation: true,
        classChange: "text-emerald-500",
        associatedPanel: `authorization_doc_validation`
    },
    "r3c3": {
        type: `IconBtn`,
        step: `proof_address_validation`,
        icon: FileSearch,
        iconExecuted: Check,
        tooltip: `Data validation`,
        hasAnimation: true,
        classChange: "text-emerald-500",
        associatedPanel: `proof_address_validation`
    },
     // Row 4
    "r4c1": {
        type: `empty`,
    },
    "r4c2": {
        type: `IconBtn`,
        step: `customer_profile`,
        icon: IdCard,
        iconExecuted: false,
        tooltip: `Consolidate customer profile`,
        hasAnimation: true,
        classChange: false,
        associatedPanel: false
    },
     "r4c3": {
        type: `empty`,
    },
    // Row 5
    "r5c1": {
        type: `IconBtn`,
        step: `database_query`,
        icon: Database,
        iconExecuted: false,
        tooltip: `Database query - Pull corresponding customer data`,
        hasAnimation: true,
        classChange: "text-amber-500",
        associatedPanel: false
    },
    "r5c2": {
        type: `IconBtn`,
        step: `comp_with_db`,
        icon: BrainCircuit,
        iconExecuted: false,
        tooltip: `Data enrichment & cross-check`,
        hasAnimation: true,
        classChange: false,
        associatedPanel: `comp_with_db`
    },
    "r5c3": { 
        type: `empty`,
    },
    // Row 6
    "r6c1": {
        type: `empty`,
    },
    "r6c2": {
        type: `ImgBtn`,
        step: `llm`,
        logo: `/logo.png`,
        logoExecuted: false,
        tooltip: `Assess risk level - LLM`,
        hasAnimation: true,
        classChange: false,
        associatedPanel: false
    },
     "r6c3": {
        type: `empty`,
    },
    // Row 7
    "r7c1": {
        type: `empty`,
    },
    "r7c2": {
        type: `IconBtn`,
        step: false,
        icon: Shield,
        iconExecuted: ShieldAlert,
        tooltip: `Consolidate customer profile`,
        hasAnimation: true,
        classChange: "text-amber-500",
        associatedPanel: "llm_output",
        onWorkflowStatus: "completed"
    },
     "r7c3": {
        type: `empty`,
    },
});