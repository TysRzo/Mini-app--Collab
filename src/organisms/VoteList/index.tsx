import VoteCard from "../../molecules/VoteCard";

export type VoteStatus = "scheduled" | "open" | "closed";

export type VoteListItem = {
  id: number;
  name: string;
  startAt: string;
  endAt: string;
  status: VoteStatus;
};

type VoteListProps = {
  votes: VoteListItem[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onOpen?: (id: number) => void;
  onClose?: (id: number) => void;
};

const VoteList = ({
  votes,
  onEdit,
  onDelete,
  onOpen,
  onClose,
}: VoteListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
      {votes.map((vote) => (
        <VoteCard
          key={vote.id}
          name={vote.name}
          startAt={vote.startAt}
          endAt={vote.endAt}
          status={vote.status}
          handleEdit={onEdit ? () => onEdit(vote.id) : undefined}
          handleDelete={onDelete ? () => onDelete(vote.id) : undefined}
          handleOpen={onOpen ? () => onOpen(vote.id) : undefined}
          handleClose={onClose ? () => onClose(vote.id) : undefined}
        />
      ))}
    </div>
  );
};

export default VoteList;
