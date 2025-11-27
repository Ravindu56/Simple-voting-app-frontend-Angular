export interface OptionVote {
    optionText: string;
    votesCount: number;
}

export interface Poll {
    id: number;
    question: string;
    options: OptionVote[];
}
