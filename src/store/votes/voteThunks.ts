import axios from "axios";
import type { AppDispatch } from "../store";
import type { Vote, VoteWithStats, VoteValue } from "./voteSlice";
import {
  setVotesError,
  setLoadingAdminVotes,
  setLoadingCurrentVote,
  setSubmittingVotes,
  setAdminVotes,
  upsertAdminVote,
  removeAdminVote,
  setCurrentVote,
  setCurrentVoteLocal,
} from "./voteSlice";

type CreateVoteRequest = {
  title: string;
  startsAt: string;
  endsAt: string;
};

type UpdateVoteRequest = {
  title?: string;
  startsAt?: string;
  endsAt?: string;
};

type CurrentVoteApiResponse = VoteWithStats | Record<string, never>;

type SubmitVoteResponse = {
  success: true;
  total: number;
  myVote: VoteValue;
};

const API = "http://localhost:3000";

// --------------------------
// Admin
// --------------------------

export const fetchAdminVotes = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingAdminVotes(true));
  dispatch(setVotesError(null));

  try {
    const res = await axios.get<Vote[]>(`${API}/api/admin/votes`, {
      withCredentials: true,
    });
    dispatch(setAdminVotes(res.data));
  } catch {
    dispatch(setVotesError("Impossible de charger les votes"));
  } finally {
    dispatch(setLoadingAdminVotes(false));
  }
};

export const createAdminVoteThunk =
  (input: CreateVoteRequest) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      const res = await axios.post<Vote>(`${API}/api/admin/votes`, input, {
        withCredentials: true,
      });

      dispatch(upsertAdminVote(res.data));
    } catch {
      dispatch(setVotesError("Impossible de créer le vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };

export const updateAdminVoteThunk =
  (id: number, input: UpdateVoteRequest) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      const res = await axios.put<Vote>(`${API}/api/admin/votes/${id}`, input, {
        withCredentials: true,
      });

      dispatch(upsertAdminVote(res.data));
    } catch {
      dispatch(setVotesError("Impossible de modifier le vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };

export const deleteAdminVoteThunk =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      await axios.delete(`${API}/api/admin/votes/${id}`, {
        withCredentials: true,
      });

      dispatch(removeAdminVote(id));
    } catch {
      dispatch(setVotesError("Impossible de supprimer le vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };

export const openAdminVoteThunk =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      const res = await axios.post<Vote>(
        `${API}/api/admin/votes/${id}/open`,
        null,
        { withCredentials: true }
      );

      dispatch(upsertAdminVote(res.data));
    } catch {
      dispatch(setVotesError("Impossible d’ouvrir le vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };

export const closeAdminVoteThunk =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      const res = await axios.post<Vote>(
        `${API}/api/admin/votes/${id}/close`,
        null,
        { withCredentials: true }
      );

      dispatch(upsertAdminVote(res.data));
    } catch {
      dispatch(setVotesError("Impossible de fermer le vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };

// --------------------------
// User
// --------------------------

export const fetchCurrentVote = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingCurrentVote(true));
  dispatch(setVotesError(null));

  try {
    const res = await axios.get<CurrentVoteApiResponse>(`${API}/api/votes/current`, {
      withCredentials: true,
    });

    const data = res.data;
    const isEmpty = !data || Object.keys(data).length === 0;

    dispatch(setCurrentVote(isEmpty ? null : (data as VoteWithStats)));
  } catch {
    dispatch(setVotesError("Impossible de charger le vote en cours"));
  } finally {
    dispatch(setLoadingCurrentVote(false));
  }
};

export const voteThunk =
  (value: VoteValue) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingVotes(true));
    dispatch(setVotesError(null));

    try {
      const res = await axios.post<SubmitVoteResponse>(
        `${API}/api/vote`,
        { value },
        { withCredentials: true }
      );

      dispatch(setCurrentVoteLocal({ total: res.data.total, myVote: res.data.myVote }));
    } catch {
      dispatch(setVotesError("Impossible d’enregistrer ton vote"));
    } finally {
      dispatch(setSubmittingVotes(false));
    }
  };
