"use client";
import React from "react";
import Button from "@mui/material/Button";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Link from "next/link";

function createItem(id: string) {
  return { id };
}

const ExampleData: GridRowsProp = [
  createItem(randomId())
];

export default function List() {

  const searchParams: ReadonlyURLSearchParams | null = useSearchParams();

  const [rows, setRows] = React.useState(ExampleData);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const createNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  const columns: GridColDef[] = [
    { field: "name", editable: true },
    { field: "notes", editable: true },
    { field: "link", editable: true },
    {
      field: "actions",
      type: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <button className="css-uxfybn-MuiButtonBase-root-MuiIconButton-root">button</button>
          ];
        }
        return [
        ];
      },
    },
  ];

  return (
    <div>
      <div className="MuiDivider-wrapper">
        <Button className="MuiButtonBase-root" onClick={createNewRow}>
          test-list
        </Button>
      </div>
        <DataGrid
          rows={rows}
          columns={columns}
          rowModesModel={rowModesModel}
        />
      <Link
        href={{
          pathname: "home",
        }}
      >
        <Button>button</Button>
      </Link>
      <div className="Mui-selected">
        <div className="actions"></div>
      </div>
    </div>
  );
}