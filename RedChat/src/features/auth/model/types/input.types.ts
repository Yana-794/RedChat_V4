export default interface ValidityRule {
    pattern?: {
        rule: string;
        message: string;
    },
    minLenght?: {
        value: number;
        message: string;
    },
    maxLenght?: {
        value: number;
        message: string;
    }
    required: {
        value: boolean;
        message: string;
        
    }

}