import { NextResponse } from 'next/server';
import productsData from '@/app/data/products.json';

export async function GET() {
  return NextResponse.json(productsData);
}
