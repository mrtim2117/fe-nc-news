import React, { useState } from "react";

import { patchArticle } from "../utils/api";
import uparrow from "./up-arrow.jpg";
import downarrow from "./down-arrow.jpg";

import styles from "./Vote.module.css";

const Vote = ({ votes, updateUrl }) => {
  const [voteState, setVoteState] = useState(votes);
  const [err, setErr] = useState(null);

  const onVoteClick = (inc) => {
    setVoteState((currVotes) => {
      return currVotes + inc;
    });

    setErr(null);

    patchArticle(updateUrl, inc).catch((err) => {
      setVoteState((currVotes) => {
        return currVotes - inc;
      });

      setErr("Voting error");
    });
  };

  return err ? (
    <p>{err}</p>
  ) : (
    <>
      <button>
        <img
          className={styles.arrow}
          src={uparrow}
          alt="Up arrow"
          onClick={() => {
            onVoteClick(1);
          }}
        />
      </button>
      <em className={styles.votes}>{voteState}</em>
      <button>
        <img
          className={styles.arrow}
          src={downarrow}
          alt="Down arrow"
          onClick={() => {
            onVoteClick(-1);
          }}
        />
      </button>
    </>
  );
};

export default Vote;
