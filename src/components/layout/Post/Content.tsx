import { Column } from "@/interfaces/post.interface";

interface ContentProps {
  columns?: Column[];
}

const Content = ({ columns }: ContentProps) => {
  return (
    <div className="md-container mx-auto">
      {columns?.map((column) => {
        return (
          <div key={column.id}>
            <div>
              {column.richText.map((richText, index) => {
                switch (richText.type) {
                  case "blockquote":
                    return (
                      <blockquote
                        key={index}
                        className="text-gray-500 italic mb-6"
                      >
                        {richText.children[0].text}
                      </blockquote>
                    );
                  case "h2":
                    return (
                      <h2 key={index} className="h2 mb-6">
                        {richText.children[0].text}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={index} className="h3 mb-6">
                        {richText.children[0].text}
                      </h3>
                    );
                  case "h4":
                    return (
                      <h4 key={index} className="h4 mb-6">
                        {richText.children[0].text}
                      </h4>
                    );

                  default:
                    return (
                      <p key={index} className="mb-4">
                        {richText.children[0].text}
                      </p>
                    );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
