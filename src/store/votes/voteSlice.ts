import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type VoteStatus = "scheduled" | "open" | "closed";
export type VoteValue = -1 | 0 | 1;

export type Vote = {
  id: number;
  title: string;
  startsAt: string;
  endsAt: string;
  status: VoteStatus;
  createdAt: string;
  updatedAt: string;
  closedAt: string | null;
};

/*
  Timeline optionnelle (journal d'actions)
*/
export type VoteAction = {
  id: number;
  voteId: number;
  userId: number;
  value: VoteValue;
  createdAt: string;
};

/*
  Vote courant + stats
  myVote: null si non connecté (API renvoie null), sinon -1/0/+1
*/
export type VoteWithStats = {
  vote: Vote;
  total: number;
  myVote: VoteValue | null;
  actions: Array<{ value: VoteValue; createdAt: string }>;
};

export type VotesState = {
  adminVotes: Vote[];
  currentVote: VoteWithStats | null;

  isLoadingAdminVotes: boolean;
  isLoadingCurrentVote: boolean;
  isSubmitting: boolean;

  error: string | null;
};

const initialState: VotesState = {
  adminVotes: [],
  currentVote: null,

  isLoadingAdminVotes: false,
  isLoadingCurrentVote: false,
  isSubmitting: false,

  error: null,
};

const voteSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    setVotesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setLoadingAdminVotes: (state, action: PayloadAction<boolean>) => {
      state.isLoadingAdminVotes = action.payload;
    },

    setLoadingCurrentVote: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCurrentVote = action.payload;
    },

    setSubmittingVotes: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },

    setAdminVotes: (state, action: PayloadAction<Vote[]>) => {
      state.adminVotes = action.payload;
    },

    upsertAdminVote: (state, action: PayloadAction<Vote>) => {
      const idx = state.adminVotes.findIndex((v) => v.id === action.payload.id);
      if (idx === -1) state.adminVotes = [action.payload, ...state.adminVotes];
      else state.adminVotes[idx] = action.payload;
    },

    removeAdminVote: (state, action: PayloadAction<number>) => {
      state.adminVotes = state.adminVotes.filter((v) => v.id !== action.payload);
    },

    setCurrentVote: (state, action: PayloadAction<VoteWithStats | null>) => {
      state.currentVote = action.payload;
    },

    /*
      Petit bonus pratique :
      après /api/vote, tu peux mettre à jour juste total + myVote
      sans refetch /api/votes/current à chaque clic.
    */
    setCurrentVoteLocal: (
      state,
      action: PayloadAction<{ total: number; myVote: VoteValue }>
    ) => {
      if (!state.currentVote) return;
      state.currentVote.total = action.payload.total;
      state.currentVote.myVote = action.payload.myVote;
    },
  },
});

export const {
  setVotesError,
  setLoadingAdminVotes,
  setLoadingCurrentVote,
  setSubmittingVotes,
  setAdminVotes,
  upsertAdminVote,
  removeAdminVote,
  setCurrentVote,
  setCurrentVoteLocal,
} = voteSlice.actions;

export default voteSlice.reducer;
