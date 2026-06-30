type KomerzaCheckoutResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

type KomerzaClient = {
  init(storeId: string): void | Promise<void>;
  clearBasket(): void | Promise<void>;
  addToBasket(
    productId: string,
    variantId: string,
    quantity: number
  ): void | Promise<void>;
  createBasketBackup(): void | Promise<void>;
  restoreBasketFromBackup(): void | Promise<void>;
  checkout(
    emailAddress: string,
    couponCode?: string
  ): void | KomerzaCheckoutResponse | Promise<void | KomerzaCheckoutResponse>;
};

interface Window {
  komerza?: KomerzaClient;
}
