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
        color: "#111111",
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