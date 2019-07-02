
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function retrieveAsset(assetName:string): string
{
  return assetName && "../../../assets/images/png/" + assetName;
}
