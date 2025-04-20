import {Body, ThemeableStack} from "@truststack/ui";
import {Link} from "solito/link";

export type BreadcrumbsProps = {
  readonly items: {label: string; href: string}[];
};

export function Breadcrumbs({items}: BreadcrumbsProps): JSX.Element {
  return (
    <ThemeableStack gap={8} alignItems="center" flexDirection="row">
      {items.map((item, index) => {
        return (
          <ThemeableStack
            key={index}
            gap={8}
            alignItems="center"
            flexDirection="row"
          >
            <Link href={item.href}>
              <Body hoverStyle={{col: "$primary"}} size="large">
                {item.label}
              </Body>
            </Link>
            {index < items.length - 1 && <Body size="large">/</Body>}
          </ThemeableStack>
        );
      })}
    </ThemeableStack>
  );
}
