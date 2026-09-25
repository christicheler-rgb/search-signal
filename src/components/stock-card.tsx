import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { formatCap, formatPe, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ListedStock } from "@/data/types";
import { GrowthSplit } from "./growth-split";

type StockCardProps = {
  stock: ListedStock;
  defaultOpen?: boolean;
  /** Theme-level desk flag from isNameSearchTrending. */
  searchTrending?: boolean;
};

export function StockCard({ stock, defaultOpen = false, searchTrending = false }: StockCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const peLabel = formatPe(stock.pe);

  return (
    <article className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="font-mono text-sm font-medium tracking-wide text-accent">
              {stock.ticker}
            </p>
            <span className="text-xs text-subtle">{stock.listing}</span>
            {searchTrending || stock.searchTrending ? (
              <span className="inline-flex items-center rounded-full bg-elevated px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent uppercase shadow-border">
                Search-trending
              </span>
            ) : null}
          </div>
          <h3 className="mt-0.5 font-display text-xl font-medium tracking-tight text-fg">
            {stock.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{stock.role}</p>
        </div>
        <dl className="grid grid-cols-3 gap-4 sm:gap-6">
          <div>
            <dt className="text-xs text-subtle">Price</dt>
            <dd className="mt-0.5 font-mono text-sm tabular-nums text-fg">
              {formatPrice(stock.price)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Mkt cap</dt>
            <dd className="mt-0.5 font-mono text-sm tabular-nums text-fg">
              {formatCap(stock.marketCapB)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">P/E (TTM)</dt>
            <dd className="mt-0.5 font-mono text-sm tabular-nums text-fg">{peLabel}</dd>
          </div>
        </dl>
      </div>

      {stock.peNote ? <p className="mt-2 text-xs text-subtle">{stock.peNote}</p> : null}

      <div className="mt-5">
        <GrowthSplit
          past={stock.past}
          current={stock.current}
          future={stock.future}
          compact={!open}
        />
      </div>

      <button
        type="button"
        className="mt-4 flex min-h-11 w-full items-center justify-between gap-2 rounded-md px-1 text-left text-sm text-muted transition-colors duration-150 hover:text-fg"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? "Hide analysis" : "Trend attribution"}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-150 ease-out",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <div className="border-t border-border pt-3">
          <p className="text-sm leading-relaxed text-muted">{stock.thesis}</p>
        </div>
      ) : null}
    </article>
  );
}
