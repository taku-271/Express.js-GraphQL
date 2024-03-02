import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Todo","loc":{"start":5,"end":9}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":14,"end":16}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":18,"end":21}},"loc":{"start":18,"end":21}},"loc":{"start":18,"end":22}},"directives":[],"loc":{"start":14,"end":22}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":25,"end":30}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":32,"end":38}},"loc":{"start":32,"end":38}},"loc":{"start":32,"end":39}},"directives":[],"loc":{"start":25,"end":39}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":42,"end":53}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":55,"end":61}},"loc":{"start":55,"end":61}},"directives":[],"loc":{"start":42,"end":61}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isCompleted","loc":{"start":64,"end":75}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":77,"end":84}},"loc":{"start":77,"end":84}},"directives":[],"loc":{"start":64,"end":84}}],"loc":{"start":0,"end":86}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":93,"end":98}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"getTodos","loc":{"start":103,"end":111}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":114,"end":118}},"loc":{"start":114,"end":118}},"loc":{"start":113,"end":119}},"loc":{"start":113,"end":120}},"directives":[],"loc":{"start":103,"end":120}}],"loc":{"start":88,"end":122}}],"loc":{"start":0,"end":123}} as unknown as DocumentNode