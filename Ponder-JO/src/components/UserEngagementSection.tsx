import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ThumbsUp, MessageSquare, Send } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
}

const UserEngagementSection: React.FC = () => {
  const [suggestion, setSuggestion] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Alice', content: 'Great blog post! I have a suggestion...', likes: 5 },
    { id: 2, author: 'Bob', content: 'I agree with Alice, this is very insightful.', likes: 2 },
  ]);

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      alert(`Suggestion submitted: ${suggestion}`);
      setSuggestion('');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        author: 'Anonymous User',
        content: commentText,
        likes: 0,
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const handleLikeComment = (id: number) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engage with the Community</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Share your thoughts, suggestions, and discuss with other readers.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          {/* Suggestion Submission Area */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Submit a Suggestion</CardTitle>
              <CardDescription>Have an idea or feedback? Let us know!</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <Textarea
                  placeholder="Your suggestion..."
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Submit Suggestion
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Community Discussion Space */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Community Discussion</CardTitle>
              <CardDescription>Join the conversation!</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div className="space-y-4 mb-6 flex-grow overflow-auto max-h-[300px]">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{comment.author}</p>
                      <p className="text-sm text-muted-foreground">{comment.content}</p>
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex items-center text-xs text-muted-foreground hover:text-primary mt-1"
                      >
                        <ThumbsUp className="mr-1 h-3 w-3" /> {comment.likes} Likes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommentSubmit} className="space-y-4 mt-auto">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="min-h-[60px]"
                />
                <Button type="submit" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" /> Post Comment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserEngagementSection;