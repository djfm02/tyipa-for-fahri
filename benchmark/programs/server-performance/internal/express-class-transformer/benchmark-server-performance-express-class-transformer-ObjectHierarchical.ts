import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ObjectHierarchical } from "../../../../../test/structures/ObjectHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectHierarchical } from "../../../../structures/class-validator/ClassValidatorObjectHierarchical";
import { createExpressServerPerformanceBenchmarkProgram } from "../createExpressServerPerformanceBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectHierarchical);
createExpressServerPerformanceBenchmarkProgram<ObjectHierarchical, any>(
    (input) => {
        const output = plainToInstance(schema, input);
        const result = validateSync(output);
        if (result.length > 0) throw new Error(result[0].toString());
        return output;
    },
    (input) => JSON.stringify(instanceToPlain(schema)),
);
