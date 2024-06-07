"use client";

import React from "react";
import { SearchIcon } from "./searchicon";

import {
  Table,
  Input,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    title: "Page and Layouts",
    slug: "page-and-layouts",
    type: "next.js",
  },
  {
    key: "2",
    title: "Defining Routes",
    slug: "defining-routes",
    type: "next.js",
  },
  {
    key: "3",
    title: "Getting Started",
    slug: "getting-started",
    type: "Guides",
  },
  {
    key: "4",
    title: "Property Control",
    slug: "property-control",
    type: "Guides",
  },
  {
    key: "4",
    title: "Building Animations",
    slug: "building-animations",
    type: "Guides",
  },
];

const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "slug",
    label: "Slug",
  },
  {
    key: "type",
    label: "Type",
  },
];

export default function TableDemo() {
  return (
    <>
      <div className="m-10 border p-5 rounded-2xl shadow-lg">
        <Input
          isClearable
          className="w-full mb-4"
          placeholder="Search..."
          startContent={<SearchIcon />}
        />
        <Table
          className="overflow-hidden border rounded-2xl
        "
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn className="bg-white" key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody className=" p-0" items={rows}>
            {(item) => (
              <TableRow className="border-y border-gray-200" key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
