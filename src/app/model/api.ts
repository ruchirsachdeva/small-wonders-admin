enum SectionType {
  HEADER, FOOTER, CURRICULUM, EVENT, FAQ, FEEDBACK, NEWS, ORGANIZATION, ADMISSION, FRANCHISEE
}

enum ContentType {
  TEXT, IMAGE, VIDEO
}

export class Content {
  id: number;
  title: string;
  description: string;
  data: string; // TODO Set correct datatype for multipart ?
  type: ContentType;
  sections: SectionType[];
}
