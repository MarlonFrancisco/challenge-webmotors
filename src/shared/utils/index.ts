export type Options = {
  withoutPrefix: boolean;
  splitted: boolean;
};

export const formatCurrency = (
  value = 0,
  options?: Options
): string | string[] => {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  let apllyOptions: string | string[] = formatted;

  if (!options) {
    return formatted;
  }

  if (options.withoutPrefix) {
    apllyOptions = apllyOptions.replace("R$", "").trim();
  }

  if (options.splitted) {
    apllyOptions = apllyOptions.split(",");
  }

  return apllyOptions;
};
