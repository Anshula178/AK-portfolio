'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mnnzbknp');

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-elegant hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  atul.striveup@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-elegant hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Usually within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-card backdrop-blur-xl shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {state.succeeded ? (
                  <p className="text-green-600 text-lg">Thanks for reaching out! I’ll get back to you soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="bg-muted/30 border-border/50 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          className="bg-muted/30 border-border/50 focus:border-primary/50 transition-colors"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>

                    <div>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        className="min-h-[140px] bg-muted/30 border-border/50 focus:border-primary/50 transition-colors resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      className="w-full group"
                      disabled={state.submitting}
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
