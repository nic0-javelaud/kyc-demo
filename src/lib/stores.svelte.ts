import * as identification_doc_ocr from "$lib/assets/json/identification_document.json";
import * as authorization_doc_ocr from "$lib/assets/json/written_authorisation.json";
import *  as proof_address_ocr from "$lib/assets/json/proof_address.json";
import * as comparison_with_db from "$lib/assets/json/comparison_with_db.json";
import * as authorization_doc_validation from "$lib/assets/json/authorization_doc_validation.json";
import * as identification_doc_validation from "$lib/assets/json/identification_doc_validation.json";
import * as proof_address_validation from "$lib/assets/json/proof_address_validation.json";
import * as llm_output from "$lib/assets/json/llm_output.json";

import type { Workflow } from "$lib/types";

export let workflow : Workflow = $state({
    data: {
        end_time: null,
        events: [],
        execution_id: null,
        result: null,
        start_time: null,
        status: null,
        total_duration_ms: null,
        workflow_name:  null
    },
    steps: [
        {
            label: "identification_doc_ocr",
            execution_time: 4300,
            data: {
                image: "identification_document.png"
            }

        },
        {
            label: "authorization_doc_ocr",
            execution_time: 4107,
            data: {
                image: `authorization_document.png`
            }

        },
        {
            label: "proof_address_ocr",
            execution_time: 3998,
            data: {
                image: "proof_address.png"
            }
        },
        {
            label: "identification_doc_validation",
            execution_time: 623,
        },
        {
            label: "authorization_doc_validation",
            execution_time: 613,
        },
        {
            label: "proof_address_validation",
            execution_time: 589,
        },
        {
            label: "customer_profile",
            execution_time: 507,
        },
        {
            label: "database_query",
            execution_time: 1897,
        },
        {
            label: "comp_with_db",
            execution_time: 500,
        },
        {
            label: "llm",
            execution_time: 5087,
        }
    ],
    history: [],
    status: "idle",
});

export const state = $state({
    app:{
        right_panel: null,
    }
});

export let streaming = $state({
    current_step: "idle",
    data: {
        identification_doc_ocr,
        authorization_doc_ocr,
        proof_address_ocr,
        authorization_doc_validation,
        identification_doc_validation,
        proof_address_validation,
        comparison_with_db,
        llm_output
    }
});