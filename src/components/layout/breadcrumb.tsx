import React, { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isCurrentPage?: boolean;
  isDisabled?: boolean;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function TopBreadcrumb({ items }: CustomBreadcrumbProps) {
  // Memoize computed values to avoid recalculating on each render
  const { currentItem, desktopBreadcrumbs } = useMemo(() => {
    // Find current page once
    const current = items.find(item => item.isCurrentPage) || items[items.length - 1];
    
    // Pre-generate desktop breadcrumb elements
    const desktop = items.map((item, index) => ({
      item,
      isLast: index === items.length - 1,
      key: `breadcrumb-${index}-${item.label}`
    }));
    
    return { currentItem: current, desktopBreadcrumbs: desktop };
  }, [items]);

  return (
    <Breadcrumb>
      {/* Mobile view - only show current page */}
      <div className="block lg:hidden w-full">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>{currentItem?.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </div>

      {/* Desktop view - show full breadcrumb */}
      <div className="hidden lg:block w-full">
        <BreadcrumbList>
          {desktopBreadcrumbs.map(({ item, isLast, key }) => (
            <React.Fragment key={key}>
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbLink className="pointer-events-none">{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbLink>
                    {item.path && !item.isDisabled ? (
                      <Link 
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={item.isDisabled ? 'text-muted-foreground pointer-events-none' : ''}>
                        {item.label}
                      </span>
                    )}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </div>
    </Breadcrumb>
  )
}