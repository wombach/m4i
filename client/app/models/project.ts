/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Right} from './Right';

export class Project {
    _id: string;
    id: string;
    type_: string;
    name: string;
    committer: string;
    documentation: string;
    start_date: number;
    end_date: number;
    derived_from: string;
    project_id: string;
    normalized_name: string;
    last_updated: number;
    rights: Array<Right>;
}