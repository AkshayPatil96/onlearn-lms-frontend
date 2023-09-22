"use client";
import { Modal, Box } from "@mui/material";
import React, { FC } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  route?: string;
  setRoute?: (route: string) => void;
  Component: any;
};

const CustomModal: FC<Props> = ({
  open,
  setOpen,
  activeItem,
  route,
  setRoute,
  Component,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] p-4 shadow outline-none">
        <Component
          setOpen={setOpen}
          setRoute={setRoute}
        />
      </Box>
    </Modal>
  );
};

export default CustomModal;
