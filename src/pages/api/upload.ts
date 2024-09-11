import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'File upload error.' });
      return;
    }

    const filePath = files.file[0].filepath;

    // 필요한 후처리 작업 수행 (예: 데이터베이스에 파일 정보 저장 등)

    res.status(200).json({ message: 'File uploaded successfully!', filePath });
  });
}
