import { Injectable } from '@nestjs/common';
import { Dropbox } from 'dropbox';
import { readFileSync, createWriteStream } from 'fs';
import fetch from 'cross-fetch';
import PDFDocument = require('pdfkit-table');
import { log } from 'console';

@Injectable()
export class DropboxDataService {
  dbx = new Dropbox({
    accessToken:
      'u7cBplMn7JcAAAAAAAAAAU0Ia3kSwxlUI6Lu--yh9_lShQOqYugvgmIPkH0-AZ52',
    fetch,
  });

  public async getAll(): Promise<any[]> {
    let filesList = [];
    await this.dbx
      .filesListFolder({
        path: '',
      })
      .then((res) => {
        filesList = res.result.entries;
      });
    return filesList;
  }

  public async geOneUserFile(id: string): Promise<any[]> {
    let filesList;
    await this.dbx
      .filesListFolder({
        path: `/auz/${id}`,
      })
      .then((res) => {
        filesList = res.result.entries;
      });
    return filesList;
  }

  public async getFileMetaData(id: string): Promise<any[]> {
    let filesList;
    await this.dbx
      .filesDownload({
        path: `/auz/${id}/${id}.pdf`,
      })
      .then((res) => {
        filesList = res.result;
      })
      .catch((err) => console.log(err));
    return filesList;
  }

  public async sendDoc(body: any): Promise<any> {
    const x: {
      id?: number;
      comments?: string;
      surname?: string;
      givenNames?: string;
    } = body;

    const pdf = new PDFDocument({
      size: 'A4',
    });

    pdf.font('Helvetica-Bold').fontSize(15).text(`${x.surname} `, 325, 25, {});
    pdf.font('Helvetica-Bold').fontSize(15).text(`${x.id} `, 325, 75, {});

    pdf.pipe(createWriteStream(`src/doc/doc.pdf`));

    pdf.end();

    let filesList;
    await this.dbx
      .filesListFolder({
        path: `/auz/${x.id}-${x.surname}-${x.givenNames}`,
      })
      .then((res) => {
        filesList = res.result.entries;
      })
      .catch((err) => {
        filesList = [];
      });

    // console.log(filesList);

    if (filesList.length > 0) {
      setTimeout(async () => {
        try {
          // const buffer = await sharp(req.file.path).toBuffer();
          const buffer = readFileSync('src/doc/doc.pdf');

          await this.dbx
            .filesUpload({
              path: `/auz/${x.id}-${x.surname}-${x.givenNames}/5 - ACCOUNTS/${x.id}-${x.surname}-${x.givenNames}.pdf`,
              contents: buffer,
              mode: { '.tag': 'overwrite' },
            })
            .then((res) => console.log('sucess'))
            .catch((err) => console.log(err));

          // fs.unlink(req.file.path,()=>{
          // res.json({file:`/static/${req.file.originalname}`})
          // })
        } catch (err) {
          console.log(err);
        }
      }, 4000);
    } else {


      try {
        // const buffer = await sharp(req.file.path).toBuffer();
        const buffer = readFileSync('src/doc/doc.pdf');

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/1-SALES`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/2 - Applicant Documents`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        //SUB-FOLDER

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/2 - Applicant Documents/CSA-956`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/2 - Applicant Documents/SKILLS ASSESSMENT`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/2 - Applicant Documents/VISA`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/3 - Sponsor Documents`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/4 - IMMI`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        // SUB-FOLDER

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/4 - IMMI/NOM`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/4 - IMMI/VISA`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        await this.dbx
          .filesCreateFolderV2({
            path: `/auz/${x.id}-${x.surname}-${x.givenNames}/5 - ACCOUNTS`,
          })
          .then((res) => console.log('sucess'))
          .catch((err) => console.log(err));

        //SUB-FOLDER

        setTimeout(async () => {
          try {
            // const buffer = await sharp(req.file.path).toBuffer();
            const buffer = readFileSync('src/doc/doc.pdf');

            await this.dbx
              .filesUpload({
                path: `/auz/${x.id}-${x.surname}-${x.givenNames}/5 - ACCOUNTS/${x.id}-${x.surname}-${x.givenNames}.pdf`,
                contents: buffer,
                mode: { '.tag': 'overwrite' },
              })
              .then((res) => console.log('sucess'))
              .catch((err) => console.log(err));


          } catch (err) {
            console.log(err);
          }
        }, 4000);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
