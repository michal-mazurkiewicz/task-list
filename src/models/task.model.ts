import { CurrencyValue } from "./money.model";

export type FormattedTask = {
  title: string;
  description: string;
  budget: CurrencyValue;
  proposalCount: number;
  platforms: string;
  timestamp: string;
};

export enum Platforms {
  INSTAGRAM = "INSTAGRAM",
  YOUTUBE = "YOUTUBE",
  TWITCH = "TWITCH",
  OTHER = "OTHER",
}

export interface TasksRequest {
  limit: number;
  platforms?: Platforms[];
  keywords?: string[];
  budgetGreaterEqual?: number;
  budgetLowerEqual?: number;
  olderThanId?: string;
  newerThanId?: string;
  skip?: number;
}

export interface TasksResponse {
  tasks: Task[];
  count: number;
}

export type Task = {
  id: string;
  addedTime: string;
  title: string;
  description: string;
  budget: CurrencyValue;
  proposalCount: number;
  platforms: Platforms[];
  proposalAlreadySent: boolean;
  addedByMe: boolean;
  hasContractCreated: boolean;
  hasContractAccepted: boolean;
  files: File[];
};

export type File = {
  id: string;
  filename: string;
  size: number;
  signedUrl: string;
};
