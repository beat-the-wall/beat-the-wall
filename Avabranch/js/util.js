function collideRoundSquare(r,n){var u=r.y-r.r,o=2*r.r,d=n.y,e=n.h,c=r.x-r.r,i=2*r.r,l=n.x,t=n.w;return!(u+o<d||u>d+e||c+i<l||c>l+t)}function collideRoundRound(r,n){var u=r.y-r.r,o=2*r.r,d=n.y-n.r,e=2*n.r,c=r.x-r.r,i=2*r.r,l=n.x-n.r,t=2*n.r;return!(u+o<d||u>d+e||c+i<l||c>l+t)}