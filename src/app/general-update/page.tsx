const General = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <h2 className="mb-6 font-semibold text-2xl">New Plan</h2>

      <div className="flex flex-col space-y-3 overflow-y-scroll max-h-[calc(75vh)]">
        <p>
          My original Proof of Concept (POC) was built using RedwoodJS.
          Recently, they announced a transition to Redwood SDK. This is supposed
          to be a vite plugin that is tightly integrated with Cloudflare. The
          main difference between JS and SDK is that JS was a more full-fledged,
          opinionated framework. The new SDK is aimed towards reducing
          &#34;bloat&#34; and streamlining the developer experience.
        </p>
        <p>
          The critical issue for anyone that was using RedwoodJS is that there
          is no migration path to RedwoodSDK other than completely rebuild your
          application. The core team at Redwood stated numerous times that JS
          would be maintained going forward and there is no need to switch. The
          issue is that the core team is not going to be doing the maintenance
          long-term. And we have all worked with open source projects long
          enough to know they aren&#39;t the most reliable on security patches.
        </p>
        <p>
          So, I decided to give the new SDK experience a shot even though it is
          currently in beta. I migrated some core components, I implemented
          their routing scheme, I tried their deployment process. I honestly
          gave it a fair shot because I believe in the Redwood ethos. However,
          since it is still in beta I ran into too many hurdles. There were too
          many things not documented yet. I&#39;ve never deployed or integrated
          with Cloudflare before. It was just too much at this point in my
          project.
        </p>
        <p>
          My struggles grew greater and my desire to keep going waned. It was at
          this point that I knew the framework (plug-in) was getting in the way
          rather than helping. My original goal for this project was to increase
          my skills and actually launch a site that people wanted to use. I was
          spending more time working to fix the framework than I was actually
          building what makes my project unique.
        </p>
        <p>
          It was at this point that I knew I needed to pivot. I have been
          wanting to try NextJS for quite some time. In fact I built this
          roadmap site purely just to try it out. I started to look into NextJS
          a bit more and realized it isn&#39;t perfect but it did provide quite
          a bit of turnkey to reduce my learning curve. That is when I made the
          decision to pivot and rebuild the POC entirely. It is quite daunting
          to make such a drastic pivot as the stage I&#39;m at but I knew
          ultimately it needed to be done.
        </p>
        <p>
          So, for those following along, I ask for some more patience. I will
          get this thing launched, but it might take a bit longer. However, I
          believe that I will be able to provide more benefit at launch than I
          originally intended. Additionally, I&#39;ll have a video up shortly to
          cover this decision.
        </p>
        <p>
          Thanks for sticking with me and I can&#39;t wait to build something
          great with you!
        </p>
      </div>
    </div>
  );
};

export default General;
