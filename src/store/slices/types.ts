export type ProductModel = {
    _id: string,
    urun_adi: string,
    urun_markasi: string,
    urun_fiyat: string,
    urun_puan: string,
    urun_degerlendirme_sayisi: string,
    urun_fotosu: string,
  };
  
  export interface ProductState {
    items: ProductModel[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  