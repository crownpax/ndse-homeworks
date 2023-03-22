import { v4 as uuidv4  } from 'uuid';

export default class Book {
    constructor(
        id=uuidv4(),
        title='',
        description='',
        authors='',
        favorite='',
        fileCover='',
        fileName=''
    ) {
        this.id=id;
        this.title=title;
        this.description=description;
        this.authors=authors;
        this.favorite=favorite;
        this.fileCover=fileCover;
        this.fileName=fileName;
    }
}