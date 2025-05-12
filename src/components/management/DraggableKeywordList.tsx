import React, { useState } from "react";
import { useTranslation } from "context/TranslationContext";
import { KeywordItem } from "./KeywordItem";
import { SearchInput } from "components/public";

export const DraggableKeywordList: React.FC = () => {
  const { state, reorderKeywords } = useTranslation();
  const [draggedItemId, setDraggedItemId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    setDraggedItemId(id);
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.classList.add("bg-blue-50", "opacity-70");
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("bg-blue-50", "opacity-70");
    setDraggedItemId(null);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, targetId: number) => {
    e.preventDefault();

    if (draggedItemId !== targetId) {
      const keywords = [...state.keywords];
      const draggedItemIndex = keywords.findIndex(
        (k) => k.id === draggedItemId
      );
      const targetIndex = keywords.findIndex((k) => k.id === targetId);

      if (draggedItemIndex !== -1 && targetIndex !== -1) {
        const [reorderedItem] = keywords.splice(draggedItemIndex, 1);
        keywords.splice(targetIndex, 0, reorderedItem);
        reorderKeywords(keywords);
      }
    }
  };

  const filteredKeywords = state.keywords.filter((keyword) =>
    keyword.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Keywords ({filteredKeywords.length})
      </h2>

      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredKeywords.map((keyword, index) => (
        <div
          key={keyword.id}
          draggable
          onDragStart={(e) => onDragStart(e, keyword.id)}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, keyword.id)}
          className="transition-transform"
        >
          <KeywordItem
            keyword={keyword}
            index={index}
            dragHandleProps={{
              onMouseDown: (e: React.MouseEvent) => {
                e.currentTarget
                  .closest("div[draggable]")
                  ?.setAttribute("draggable", "true");
              },
              onMouseUp: (e: React.MouseEvent) => {
                e.currentTarget
                  .closest("div[draggable]")
                  ?.setAttribute("draggable", "false");
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};
