export function Greeting({ name }: { name?: string }) {
  return <h1>Hello {name ?? "Stranger"}</h1>;
}
