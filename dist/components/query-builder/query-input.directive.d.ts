import { TemplateRef } from '@angular/core';
export declare class QueryInputDirective {
    template: TemplateRef<any>;
    /** Unique name for query input type. */
    queryInputType: string;
    private _type;
    constructor(template: TemplateRef<any>);
}
