"use client";

import { useState, useMemo } from "react";
import type { MouseEvent } from "react";
import type { Project } from "@/lib/data";

export default function WorkRegistry({ projects }: { projects: Project[] }) {
  const [openCode, setOpenCode] = useState<string | null>(
    projects.find((p) => p.featured)?.code ?? null
  );
  const [allExpanded, setAllExpanded] = useState<boolean>(false);
  const [expandedCodes, setExpandedCodes] = useState<Set<string>>(
    () => new Set(projects.filter((p) => p.featured).map((p) => p.code))
  );
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Derive unique project types
  const types = useMemo(() => {
    const list = Array.from(new Set(projects.map((p) => p.type)));
    return ["ALL", ...list];
  }, [projects]);

  // Filter projects by type, search query, and active stack pill
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesType = selectedType === "ALL" || project.type === selectedType;
      const matchesStack =
        !selectedStack ||
        project.stack.some(
          (s) => s.toLowerCase() === selectedStack.toLowerCase()
        );
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.code.toLowerCase().includes(query) ||
        (project.role?.toLowerCase().includes(query) ?? false) ||
        (project.description && project.description.toLowerCase().includes(query)) ||
        (project.problem && project.problem.toLowerCase().includes(query)) ||
        project.stack.some((s) => s.toLowerCase().includes(query));

      return matchesType && matchesStack && matchesQuery;
    });
  }, [projects, selectedType, selectedStack, searchQuery]);

  const toggleOpen = (code: string) => {
    setExpandedCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  const handleToggleAll = () => {
    if (allExpanded) {
      setExpandedCodes(new Set());
      setAllExpanded(false);
    } else {
      setExpandedCodes(new Set(filteredProjects.map((p) => p.code)));
      setAllExpanded(true);
    }
  };

  const handleCopy = (code: string, e: MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#${code}`);
    }
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const clearFilters = () => {
    setSelectedType("ALL");
    setSearchQuery("");
    setSelectedStack(null);
  };

  const hasActiveFilters =
    selectedType !== "ALL" || searchQuery.trim() !== "" || selectedStack !== null;

  return (
    <div>
      {/* ------------------------------------------------ INTERACTIVE TOOLBAR */}
      <div className="registry-toolbar">
        {/* Category Filters */}
        <div className="registry-filters" role="group" aria-label="Filter by project type">
          {types.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                className={`registry-filter-btn ${
                  isActive ? "registry-filter-btn--active" : ""
                }`}
                onClick={() => setSelectedType(type)}
                aria-pressed={isActive}
              >
                {type}
              </button>
            );
          })}

          {selectedStack && (
            <button
              type="button"
              className="registry-filter-btn registry-filter-btn--active"
              onClick={() => setSelectedStack(null)}
              title="Click to clear stack filter"
            >
              STACK: {selectedStack.toUpperCase()} ✕
            </button>
          )}

          {hasActiveFilters && (
            <button
              type="button"
              className="registry-filter-btn"
              onClick={clearFilters}
              style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
            >
              RESET ALL ✕
            </button>
          )}
        </div>

        {/* Search & Batch Action Buttons */}
        <div className="registry-actions">
          <div className="registry-search-wrap">
            <input
              type="search"
              className="registry-search-input"
              placeholder="Search files or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search work registry"
            />
          </div>

          <button
            type="button"
            className="registry-batch-btn"
            onClick={handleToggleAll}
            aria-label={allExpanded ? "Collapse all files" : "Expand all files"}
          >
            {allExpanded ? "COLLAPSE ALL ↑" : "EXPAND ALL ↓"}
          </button>
        </div>
      </div>

      {/* Meta Counter */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span className="meta-text">
          SHOWING {filteredProjects.length} OF {projects.length} FILES
        </span>
        {hasActiveFilters && (
          <span className="meta-text meta-text--accent">FILTERS ACTIVE</span>
        )}
      </div>

      {/* ------------------------------------------------ REGISTRY LEDGER */}
      <div className="registry" role="region" aria-label="Work registry files">
        {filteredProjects.length === 0 ? (
          <div className="registry-empty">
            <p className="body-text body-text--muted" style={{ margin: "0 auto" }}>
              No entries found matching current filter query.
            </p>
            <button
              type="button"
              className="btn"
              onClick={clearFilters}
              style={{ marginTop: 16 }}
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => {
            const isOpen = expandedCodes.has(project.code);
            return (
              <div
                className={`registry-entry ${
                  isOpen ? "registry-entry--open" : ""
                }`}
                key={project.code}
                id={project.code}
              >
                <button
                  type="button"
                  className="registry-entry__row"
                  onClick={() => toggleOpen(project.code)}
                  aria-expanded={isOpen}
                  aria-controls={`detail-${project.code}`}
                >
                  <span className="meta-text registry-entry__code">
                    {project.code}
                  </span>
                  <span className="registry-entry__name">{project.name}</span>
                  <span className="meta-text registry-entry__tag">
                    {project.type} · {project.year}
                  </span>
                  <span className="registry-entry__toggle">
                    {isOpen ? "close file ↑" : "open file →"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="registry-detail"
                    id={`detail-${project.code}`}
                  >
                    <p className="body-text body-text--muted registry-detail__desc">
                      {project.problem ?? project.description}{" "}
                      {project.result}
                    </p>

                    <div className="registry-detail__grid">
                      <div>
                        <div className="meta-text">Role</div>
                        <div className="registry-detail__value">
                          {project.role}
                        </div>
                      </div>
                      <div>
                        <div className="meta-text">Stack (Click to filter)</div>
                        <div className="registry-stack-pills">
                          {project.stack.map((item) => {
                            const isSelected =
                              selectedStack?.toLowerCase() ===
                              item.toLowerCase();
                            return (
                              <button
                                key={item}
                                type="button"
                                className={`registry-stack-pill ${
                                  isSelected ? "registry-stack-pill--active" : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedStack(isSelected ? null : item);
                                }}
                                title={`Filter by ${item}`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="meta-text">Artifacts</div>
                        <div className="registry-detail__value">
                          {project.artifacts?.join(", ") ?? "Production System"}
                        </div>
                      </div>
                    </div>

                    <div className="registry-actions-bar">
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-arrow"
                        >
                          View project artifact
                          <span className="link-arrow__glyph">→</span>
                        </a>
                      )}

                      <button
                        type="button"
                        className="registry-action-btn"
                        onClick={(e) => handleCopy(project.code, e)}
                        aria-label={`Copy reference for ${project.code}`}
                      >
                        {copiedCode === project.code
                          ? "✓ REFERENCE COPIED"
                          : `COPY ID [${project.code}]`}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}