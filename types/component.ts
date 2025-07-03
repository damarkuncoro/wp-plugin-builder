export type ComponentType = 'header' | 'section' | 'image' | 'button';

export interface ComponentBlock {
  id: number;
  type: ComponentType;
  text?: string;
  color?: string;
  src?: string;
}


export type ComponentField = {
  key: string;
  type: 'text' | 'color' | 'image' | 'link' | 'list' | 'richText' | 'number';
  value: any;
};

export type ComponentSchema = {
  id: string;
  userId: string;
  name: string;
  type: string;
  description?: string;
  thumbnail?: string;
  fields: ComponentField[];
  children?: ComponentSchema[];
  createdAt: string;
  updatedAt: string;
};

export type ComponentMarketplace = {
  id: string;
  userId: string;
  name: string;
  type: string;
  description?: string;
  thumbnail?: string;
  fields: ComponentField[];
  children?: ComponentMarketplace[];
  createdAt: string;
  updatedAt: string;
};
import React from 'react';

export type RendererMap = Record<string, React.FC<any>>;