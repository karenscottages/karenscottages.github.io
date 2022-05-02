import React from "react";

const Tile = ({children, className = ""}) => <tile className={`tile ${className}`}>{children}</tile>;

const AncestorTile = ({children, className}) => <Tile className={`is-ancestor ${className}`}>{children}</Tile>;

const ParentTile = ({children, className}) => <Tile className={`is-parent ${className}`}>{children}</Tile>;

const ChildTile = ({children, className}) => <Tile className={`is-child ${className}`}>{children}</Tile>;

Tile.Ancestor = AncestorTile;
Tile.Parent = ParentTile;
Tile.Child = ChildTile;
export { Tile };