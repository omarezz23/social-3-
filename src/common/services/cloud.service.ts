
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

import { Upload } from "@aws-sdk/lib-storage";

export class CloudService {
  private readonly s3Client: S3Client;
  private readonly bucket: string;

  constructor() {
    this.bucket = process.env.AWS_BUCKET_NAME as string;

    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile({
    file,
    key,
  }: {
    file: Buffer;
    key: string;
  }) {
    return await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: file,
      })
    );
  }

  async downloadFile({ key }: { key: string }) {
    return await this.s3Client.send(
      new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      })
    );
  }

  async deleteFile({ key }: { key: string }) {
    return await this.s3Client.send(
      new DeleteObjectCommand({
        Bucket: this.bucket,
        Key: key,
      })
    );
  }
}

export const cloudService = new CloudService();
